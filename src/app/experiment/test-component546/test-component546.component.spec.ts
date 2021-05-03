import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent546Component } from './test-component546.component';

describe('TestComponent546Component', () => {
  let component: TestComponent546Component;
  let fixture: ComponentFixture<TestComponent546Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent546Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent546Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
