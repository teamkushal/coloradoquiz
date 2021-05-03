import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent725Component } from './test-component725.component';

describe('TestComponent725Component', () => {
  let component: TestComponent725Component;
  let fixture: ComponentFixture<TestComponent725Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent725Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent725Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
