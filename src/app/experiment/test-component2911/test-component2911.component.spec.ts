import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2911Component } from './test-component2911.component';

describe('TestComponent2911Component', () => {
  let component: TestComponent2911Component;
  let fixture: ComponentFixture<TestComponent2911Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2911Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2911Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
