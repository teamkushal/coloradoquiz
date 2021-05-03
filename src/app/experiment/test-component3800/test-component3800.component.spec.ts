import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3800Component } from './test-component3800.component';

describe('TestComponent3800Component', () => {
  let component: TestComponent3800Component;
  let fixture: ComponentFixture<TestComponent3800Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3800Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3800Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
