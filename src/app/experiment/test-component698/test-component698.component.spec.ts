import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent698Component } from './test-component698.component';

describe('TestComponent698Component', () => {
  let component: TestComponent698Component;
  let fixture: ComponentFixture<TestComponent698Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent698Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent698Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
