import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2271Component } from './test-component2271.component';

describe('TestComponent2271Component', () => {
  let component: TestComponent2271Component;
  let fixture: ComponentFixture<TestComponent2271Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2271Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2271Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
