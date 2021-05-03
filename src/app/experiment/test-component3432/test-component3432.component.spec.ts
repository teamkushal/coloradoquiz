import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3432Component } from './test-component3432.component';

describe('TestComponent3432Component', () => {
  let component: TestComponent3432Component;
  let fixture: ComponentFixture<TestComponent3432Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3432Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3432Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
