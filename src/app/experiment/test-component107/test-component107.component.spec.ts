import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent107Component } from './test-component107.component';

describe('TestComponent107Component', () => {
  let component: TestComponent107Component;
  let fixture: ComponentFixture<TestComponent107Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent107Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
