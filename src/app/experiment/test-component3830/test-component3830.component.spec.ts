import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3830Component } from './test-component3830.component';

describe('TestComponent3830Component', () => {
  let component: TestComponent3830Component;
  let fixture: ComponentFixture<TestComponent3830Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3830Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3830Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
