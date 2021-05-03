import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent271Component } from './test-component271.component';

describe('TestComponent271Component', () => {
  let component: TestComponent271Component;
  let fixture: ComponentFixture<TestComponent271Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent271Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent271Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
