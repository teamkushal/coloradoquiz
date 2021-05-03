import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3885Component } from './test-component3885.component';

describe('TestComponent3885Component', () => {
  let component: TestComponent3885Component;
  let fixture: ComponentFixture<TestComponent3885Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3885Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3885Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
