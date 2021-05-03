import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3138Component } from './test-component3138.component';

describe('TestComponent3138Component', () => {
  let component: TestComponent3138Component;
  let fixture: ComponentFixture<TestComponent3138Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3138Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3138Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
