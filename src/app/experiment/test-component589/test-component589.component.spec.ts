import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent589Component } from './test-component589.component';

describe('TestComponent589Component', () => {
  let component: TestComponent589Component;
  let fixture: ComponentFixture<TestComponent589Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent589Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent589Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
