import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent563Component } from './test-component563.component';

describe('TestComponent563Component', () => {
  let component: TestComponent563Component;
  let fixture: ComponentFixture<TestComponent563Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent563Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent563Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
