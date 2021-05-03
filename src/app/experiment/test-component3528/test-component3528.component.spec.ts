import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3528Component } from './test-component3528.component';

describe('TestComponent3528Component', () => {
  let component: TestComponent3528Component;
  let fixture: ComponentFixture<TestComponent3528Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3528Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3528Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
