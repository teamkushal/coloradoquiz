import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3058Component } from './test-component3058.component';

describe('TestComponent3058Component', () => {
  let component: TestComponent3058Component;
  let fixture: ComponentFixture<TestComponent3058Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3058Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3058Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
