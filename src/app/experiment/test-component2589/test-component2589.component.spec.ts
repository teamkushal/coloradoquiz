import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2589Component } from './test-component2589.component';

describe('TestComponent2589Component', () => {
  let component: TestComponent2589Component;
  let fixture: ComponentFixture<TestComponent2589Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2589Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2589Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
