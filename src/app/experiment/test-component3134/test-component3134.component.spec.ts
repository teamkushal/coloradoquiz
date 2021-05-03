import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3134Component } from './test-component3134.component';

describe('TestComponent3134Component', () => {
  let component: TestComponent3134Component;
  let fixture: ComponentFixture<TestComponent3134Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3134Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
