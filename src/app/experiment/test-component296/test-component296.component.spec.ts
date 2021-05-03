import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent296Component } from './test-component296.component';

describe('TestComponent296Component', () => {
  let component: TestComponent296Component;
  let fixture: ComponentFixture<TestComponent296Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent296Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent296Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
