import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent616Component } from './test-component616.component';

describe('TestComponent616Component', () => {
  let component: TestComponent616Component;
  let fixture: ComponentFixture<TestComponent616Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent616Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent616Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
