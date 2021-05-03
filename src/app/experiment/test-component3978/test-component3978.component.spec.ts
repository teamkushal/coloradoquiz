import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3978Component } from './test-component3978.component';

describe('TestComponent3978Component', () => {
  let component: TestComponent3978Component;
  let fixture: ComponentFixture<TestComponent3978Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3978Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3978Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
