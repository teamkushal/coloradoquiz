import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent141Component } from './test-component141.component';

describe('TestComponent141Component', () => {
  let component: TestComponent141Component;
  let fixture: ComponentFixture<TestComponent141Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent141Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
