import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2335Component } from './test-component2335.component';

describe('TestComponent2335Component', () => {
  let component: TestComponent2335Component;
  let fixture: ComponentFixture<TestComponent2335Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2335Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2335Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
