import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent641Component } from './test-component641.component';

describe('TestComponent641Component', () => {
  let component: TestComponent641Component;
  let fixture: ComponentFixture<TestComponent641Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent641Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent641Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
