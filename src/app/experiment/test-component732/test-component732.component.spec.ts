import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent732Component } from './test-component732.component';

describe('TestComponent732Component', () => {
  let component: TestComponent732Component;
  let fixture: ComponentFixture<TestComponent732Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent732Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent732Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
