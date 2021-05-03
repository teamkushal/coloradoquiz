import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent911Component } from './test-component911.component';

describe('TestComponent911Component', () => {
  let component: TestComponent911Component;
  let fixture: ComponentFixture<TestComponent911Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent911Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent911Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
