import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent687Component } from './test-component687.component';

describe('TestComponent687Component', () => {
  let component: TestComponent687Component;
  let fixture: ComponentFixture<TestComponent687Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent687Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent687Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
