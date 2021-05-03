import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2185Component } from './test-component2185.component';

describe('TestComponent2185Component', () => {
  let component: TestComponent2185Component;
  let fixture: ComponentFixture<TestComponent2185Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2185Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2185Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
