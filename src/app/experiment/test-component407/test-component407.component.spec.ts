import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent407Component } from './test-component407.component';

describe('TestComponent407Component', () => {
  let component: TestComponent407Component;
  let fixture: ComponentFixture<TestComponent407Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent407Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent407Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
