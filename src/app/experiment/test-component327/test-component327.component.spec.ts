import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent327Component } from './test-component327.component';

describe('TestComponent327Component', () => {
  let component: TestComponent327Component;
  let fixture: ComponentFixture<TestComponent327Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent327Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent327Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
