import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3906Component } from './test-component3906.component';

describe('TestComponent3906Component', () => {
  let component: TestComponent3906Component;
  let fixture: ComponentFixture<TestComponent3906Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3906Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3906Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
