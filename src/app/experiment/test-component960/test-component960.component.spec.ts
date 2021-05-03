import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent960Component } from './test-component960.component';

describe('TestComponent960Component', () => {
  let component: TestComponent960Component;
  let fixture: ComponentFixture<TestComponent960Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent960Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent960Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
