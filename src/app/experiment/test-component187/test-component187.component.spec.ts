import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent187Component } from './test-component187.component';

describe('TestComponent187Component', () => {
  let component: TestComponent187Component;
  let fixture: ComponentFixture<TestComponent187Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent187Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent187Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
