import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1271Component } from './test-component1271.component';

describe('TestComponent1271Component', () => {
  let component: TestComponent1271Component;
  let fixture: ComponentFixture<TestComponent1271Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1271Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1271Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
