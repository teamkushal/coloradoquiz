import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent874Component } from './test-component874.component';

describe('TestComponent874Component', () => {
  let component: TestComponent874Component;
  let fixture: ComponentFixture<TestComponent874Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent874Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent874Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
