import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3576Component } from './test-component3576.component';

describe('TestComponent3576Component', () => {
  let component: TestComponent3576Component;
  let fixture: ComponentFixture<TestComponent3576Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3576Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3576Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
