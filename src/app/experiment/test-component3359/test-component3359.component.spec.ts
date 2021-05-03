import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3359Component } from './test-component3359.component';

describe('TestComponent3359Component', () => {
  let component: TestComponent3359Component;
  let fixture: ComponentFixture<TestComponent3359Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3359Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3359Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
