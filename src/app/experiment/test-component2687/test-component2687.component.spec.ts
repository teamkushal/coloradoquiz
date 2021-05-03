import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2687Component } from './test-component2687.component';

describe('TestComponent2687Component', () => {
  let component: TestComponent2687Component;
  let fixture: ComponentFixture<TestComponent2687Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2687Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2687Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
