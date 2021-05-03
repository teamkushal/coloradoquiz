import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3620Component } from './test-component3620.component';

describe('TestComponent3620Component', () => {
  let component: TestComponent3620Component;
  let fixture: ComponentFixture<TestComponent3620Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3620Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3620Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
