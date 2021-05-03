import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent832Component } from './test-component832.component';

describe('TestComponent832Component', () => {
  let component: TestComponent832Component;
  let fixture: ComponentFixture<TestComponent832Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent832Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent832Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
