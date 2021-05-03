import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent974Component } from './test-component974.component';

describe('TestComponent974Component', () => {
  let component: TestComponent974Component;
  let fixture: ComponentFixture<TestComponent974Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent974Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent974Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
