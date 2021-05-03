import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent850Component } from './test-component850.component';

describe('TestComponent850Component', () => {
  let component: TestComponent850Component;
  let fixture: ComponentFixture<TestComponent850Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent850Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent850Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
