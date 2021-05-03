import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent450Component } from './test-component450.component';

describe('TestComponent450Component', () => {
  let component: TestComponent450Component;
  let fixture: ComponentFixture<TestComponent450Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent450Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent450Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
