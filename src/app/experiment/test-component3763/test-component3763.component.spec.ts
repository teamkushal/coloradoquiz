import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3763Component } from './test-component3763.component';

describe('TestComponent3763Component', () => {
  let component: TestComponent3763Component;
  let fixture: ComponentFixture<TestComponent3763Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3763Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3763Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
