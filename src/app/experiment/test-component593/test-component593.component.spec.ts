import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent593Component } from './test-component593.component';

describe('TestComponent593Component', () => {
  let component: TestComponent593Component;
  let fixture: ComponentFixture<TestComponent593Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent593Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent593Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
