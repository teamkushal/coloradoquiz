import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2750Component } from './test-component2750.component';

describe('TestComponent2750Component', () => {
  let component: TestComponent2750Component;
  let fixture: ComponentFixture<TestComponent2750Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2750Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2750Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
