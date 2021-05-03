import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent737Component } from './test-component737.component';

describe('TestComponent737Component', () => {
  let component: TestComponent737Component;
  let fixture: ComponentFixture<TestComponent737Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent737Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent737Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
