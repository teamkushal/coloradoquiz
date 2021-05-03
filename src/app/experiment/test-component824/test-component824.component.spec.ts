import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent824Component } from './test-component824.component';

describe('TestComponent824Component', () => {
  let component: TestComponent824Component;
  let fixture: ComponentFixture<TestComponent824Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent824Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent824Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
