import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2703Component } from './test-component2703.component';

describe('TestComponent2703Component', () => {
  let component: TestComponent2703Component;
  let fixture: ComponentFixture<TestComponent2703Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2703Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2703Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
