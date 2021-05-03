import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3136Component } from './test-component3136.component';

describe('TestComponent3136Component', () => {
  let component: TestComponent3136Component;
  let fixture: ComponentFixture<TestComponent3136Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3136Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3136Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
