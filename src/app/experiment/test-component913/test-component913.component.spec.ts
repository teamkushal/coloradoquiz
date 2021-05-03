import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent913Component } from './test-component913.component';

describe('TestComponent913Component', () => {
  let component: TestComponent913Component;
  let fixture: ComponentFixture<TestComponent913Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent913Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent913Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
