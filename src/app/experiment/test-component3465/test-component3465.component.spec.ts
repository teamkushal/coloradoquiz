import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3465Component } from './test-component3465.component';

describe('TestComponent3465Component', () => {
  let component: TestComponent3465Component;
  let fixture: ComponentFixture<TestComponent3465Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3465Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3465Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
