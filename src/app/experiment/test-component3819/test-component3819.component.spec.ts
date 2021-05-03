import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3819Component } from './test-component3819.component';

describe('TestComponent3819Component', () => {
  let component: TestComponent3819Component;
  let fixture: ComponentFixture<TestComponent3819Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3819Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3819Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
