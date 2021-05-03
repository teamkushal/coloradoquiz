import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent273Component } from './test-component273.component';

describe('TestComponent273Component', () => {
  let component: TestComponent273Component;
  let fixture: ComponentFixture<TestComponent273Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent273Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent273Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
